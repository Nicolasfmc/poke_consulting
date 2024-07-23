import { memo, useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import DataTable from 'react-data-table-component'
import { UserColumns } from './components/user.table'
import { useMutation, useQuery } from 'react-query'
import {
  deleteTeam,
  getAllUsers,
  getTeam,
  putRegisterUser,
  saveTeam,
  updateUser,
} from '../../services'
import {
  RegisterUserI,
  TeamPk,
  UpdateUserI,
  UserPk,
} from '../../services/interfaces'
import UserModal from './components/UserModal'
import TeamModal from './components/TeamModal'
import Button from '../../components/Button'
import UserNewModal from './components/UserNewModal'
import { toast } from 'react-toastify'
import { TeamColumns } from './components/team.table'
import { Tab, Tabs } from '@mui/material'

const Admin = () => {
  const [tab, setTab] = useState<number>(1)
  const allUsers = useQuery('getAllUsers', () => getAllUsers())
  const [isUserEditModalOpen, setModalUserEditOpen] = useState(false)
  const [isUserNewModalOpen, setModalUserNewOpen] = useState(false)
  const [isTeamEditModalOpen, setModalTeamEditOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UserPk>()
  const [selectedTeam, setSelectedTeam] = useState<TeamPk>()
  const [dataTeam, setDataTeam] = useState<TeamPk[]>([])

  const handleEdit = (row: UserPk) => {
    setSelectedUser(row)
    setModalUserEditOpen(true)
  }

  const handleEditTeam = (row: TeamPk) => {
    setSelectedTeam(row)
    setModalUserEditOpen(true)
  }

  const updateUserQuery = useMutation((data: UpdateUserI) => updateUser(data), {
    mutationKey: 'updateUser',
    onSuccess: () => {
      allUsers.refetch()
    },
  })

  const registerUserQuery = useMutation(
    (data: RegisterUserI) => putRegisterUser(data),
    {
      mutationKey: 'registerUser',
      onSuccess: () => {
        toast.success('Usuário registrado com sucesso!')
        allUsers.refetch()
      },
    },
  )

  const getTeamQuery = useMutation((idOwner: number) => getTeam(idOwner), {
    mutationKey: 'getTeam',
    onSuccess: (r) => {
      setDataTeam(r.data)
    },
  })

  const saveTeamQuery = useMutation((data: TeamPk[]) => saveTeam(data), {
    mutationKey: 'saveTeam',
    onSuccess: (r) => {
      toast.success(r.data.status)
    },
  })

  const deleteTeamQuery = useMutation(
    (idPokemon: number) => deleteTeam(idPokemon),
    {
      mutationKey: 'deleteTeam',
      onSuccess: (r) => {
        toast.success(r.data.status)
      },
    },
  )

  const handleGetTeam = async (row: UserPk) => {
    await getTeamQuery.mutateAsync(row.id)
    setTab(2)
  }

  useEffect(() => {
    getTeamQuery.mutateAsync(1)
  }, [])

  const ShowTable = () => {
    switch (tab) {
      case 1:
        return (
          <>
            <Button
              style={{ margin: 5 }}
              onClick={() => setModalUserNewOpen(true)}
            >
              Novo Usuário
            </Button>
            <DataTable
              columns={UserColumns({ allUsers, handleEdit })}
              data={allUsers?.data?.data ?? []}
              pagination
              subHeaderWrap
              highlightOnHover
              onRowClicked={(r) => handleGetTeam(r)}
            />
            <UserModal
              isOpen={isUserEditModalOpen}
              onSave={updateUserQuery}
              onRequestClose={() => setModalUserEditOpen(false)}
              user={selectedUser}
            />
            <UserNewModal
              isOpen={isUserNewModalOpen}
              onSave={registerUserQuery}
              onRequestClose={() => setModalUserNewOpen(false)}
            />
          </>
        )
      case 2:
      default:
        return (
          <>
            <Button
              style={{ margin: 5 }}
              onClick={() => setModalTeamEditOpen(true)}
            >
              Novo Pokémon
            </Button>
            <DataTable
              columns={TeamColumns({
                deleteTeamQuery,
                handleEdit: handleEditTeam,
              })}
              data={dataTeam ?? []}
              pagination
              subHeaderWrap
              highlightOnHover
            />
            <TeamModal
              isOpen={isTeamEditModalOpen}
              onSave={saveTeamQuery}
              onRequestClose={() => setModalTeamEditOpen(false)}
              team={selectedTeam}
            />
          </>
        )
    }
  }

  return (
    <>
      <NavBar />
      <Tabs value={tab - 1}>
        <Tab label="Usuários" onClick={() => setTab(1)} />
        <Tab label="Pokémon" onClick={() => setTab(2)} />
      </Tabs>
      {ShowTable()}
    </>
  )
}

export default memo(Admin)

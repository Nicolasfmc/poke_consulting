import { memo, useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import DataTable from 'react-data-table-component'
import { UserColumns } from './components/user.table'
import { useMutation, useQuery } from 'react-query'
import {
  deleteTeam,
  getAllUsers,
  getTeam,
  getUser,
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
import { TeamColumns } from './components/team.table'
import TeamNewModal from './components/TeamNewModal'

const Admin = () => {
  const allUsers = useQuery('getAllUsers', () => getAllUsers())
  const [isUserEditModalOpen, setModalUserEditOpen] = useState(false)
  const [isUserNewModalOpen, setModalUserNewOpen] = useState(false)
  const [isTeamEditModalOpen, setModalTeamEditOpen] = useState(false)
  const [isTeamNewModalOpen, setModalTeamNewOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UserPk>()
  const [selectedTeam, setSelectedTeam] = useState<TeamPk>()
  const [dataTeam, setDataTeam] = useState<TeamPk[]>([])

  // objetos iniciais
  useEffect(() => {
    getTeamQuery.mutateAsync(1)
  }, [])

  const handleGetTeam = async (row: UserPk) => {
    setSelectedUser(row)
    await getTeamQuery.mutateAsync(row.id)
  }

  const handleEdit = (row: UserPk) => {
    setSelectedUser(row)
    setModalUserEditOpen(true)
  }

  const handleEditTeam = (row: TeamPk) => {
    setSelectedTeam(row)
    setModalTeamEditOpen(true)
  }

  useQuery('getUserInicial', () => getUser(1), {
    onSuccess: (r) => {
      setSelectedUser(r.data[0])
    },
  })

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
        console.log('Usuário registrado com sucesso!')
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
      console.log(r.data.status)
      setSelectedTeam(undefined)
      if (selectedUser) getTeamQuery.mutateAsync(selectedUser?.id)
    },
  })

  const deleteTeamQuery = useMutation(
    (idPokemon: number) => deleteTeam(idPokemon),
    {
      mutationKey: 'deleteTeam',
      onSuccess: (r) => {
        console.log(r.data.status)
      },
    },
  )

  return (
    <>
      <NavBar />
      <>
        <Button style={{ margin: 5 }} onClick={() => setModalUserNewOpen(true)}>
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
      <>
        <div style={{ display: 'flex' }}>
          <Button
            style={{ margin: 5 }}
            onClick={() => setModalTeamNewOpen(true)}
          >
            Novo Pokémon
          </Button>
          <h5>Dono do time: {selectedUser?.username}</h5>
        </div>
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
        <TeamNewModal
          isOpen={isTeamNewModalOpen}
          onSave={saveTeamQuery}
          onRequestClose={() => setModalTeamNewOpen(false)}
          idOwner={selectedUser?.id}
        />
      </>
    </>
  )
}

export default memo(Admin)

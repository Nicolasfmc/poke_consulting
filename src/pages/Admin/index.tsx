import { memo, useState } from 'react'
import NavBar from '../../components/NavBar'
import DataTable from 'react-data-table-component'
import { UserColumns } from './components/user.table'
import { useMutation, useQuery } from 'react-query'
import { getAllUsers, saveTeam, updateUser } from '../../services'
import { TeamPk, UpdateUserI, UserPk } from '../../services/interfaces'
import UserModal from './components/UserModal'
import TeamModal from './components/TeamModal'

const Admin = () => {
  const allUsers = useQuery('getAllUsers', () => getAllUsers())
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UserPk>()

  const handleEdit = (row: UserPk) => {
    setSelectedUser(row)
    setIsModalOpen(true)
  }

  const updateUserQuery = useMutation((data: UpdateUserI) => updateUser(data), {
    mutationKey: 'updateUser',
    onSuccess: () => {
      allUsers.refetch()
    },
  })

  const saveTeamQuery = useMutation((data: TeamPk[]) => saveTeam(data), {
    mutationKey: 'saveTeam',
    onSuccess: () => {
      // allTeams.refetch()
    },
  })

  return (
    <>
      <NavBar />
      <DataTable
        columns={UserColumns({ allUsers, handleEdit })}
        data={allUsers?.data?.data ?? []}
        pagination
        subHeaderWrap
        highlightOnHover
      />
      <UserModal
        isOpen={isModalOpen}
        onSave={updateUserQuery}
        onRequestClose={() => setIsModalOpen(false)}
        user={selectedUser}
        />
      <TeamModal
        isOpen={isModalOpen}
        onSave={saveTeamQuery}
        onRequestClose={() => setIsModalOpen(false)}
        team={selectedUser}
      />
    </>
  )
}

export default memo(Admin)

import { memo, useState } from 'react'
import NavBar from '../../components/NavBar'
import DataTable from 'react-data-table-component'
import { UserColumns } from './components/user.table'
import { useMutation, useQuery } from 'react-query'
import { getAllUsers, updateUser } from '../../services'
import UserModal from './components/UserModal'
import { UpdateUserI, UserPk } from '../../services/interfaces'

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
      <div
        style={{
          backgroundColor: 'white',
          width: '30%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <UserModal
          isOpen={isModalOpen}
          onSave={updateUserQuery}
          onRequestClose={() => setIsModalOpen(false)}
          user={selectedUser}
        />
      </div>
    </>
  )
}

export default memo(Admin)

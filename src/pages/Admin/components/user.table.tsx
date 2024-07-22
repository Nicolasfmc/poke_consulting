import { TableColumn } from 'react-data-table-component'
import { UpdateUserI, UserPk } from '../../../services/interfaces'
import Button from '../../../components/Button'
import { useMutation } from 'react-query'
import { updateUser, deleteUser } from '../../../services'
import { formatDate } from '../../../utils/functions'
import { useState } from 'react'
import UserModal from './UserModal'

export const UserColumns = ({
  allUsers,
  handleEdit,
}: any): TableColumn<UserPk>[] => {
  const deleteUserQuery = useMutation((id: number) => deleteUser(id), {
    mutationKey: 'deleteUser',
    onSuccess: () => {
      allUsers.refetch()
    },
  })

  const columns: TableColumn<UserPk>[] = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Username',
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: 'Senha',
      selector: (row) => row.senha,
      sortable: true,
    },
    {
      name: 'Data Cadastro',
      cell: (row) => formatDate(row.dta_cadastro),
      sortable: true,
    },
    {
      name: 'Ind. Inativo',
      cell: (row) => row.ind_inativo,
      sortable: true,
    },
    {
      name: 'Ind. Admin',
      cell: (row) => row.ind_admin,
      sortable: true,
    },
    {
      name: 'Idade',
      selector: (row) => row.idade,
      sortable: true,
    },
    {
      name: 'Ind. Plano',
      cell: (row) => row.ind_plano ?? '',
      sortable: true,
    },
    {
      name: 'Editar',
      cell: (row) => (
        <Button variant="outlined" onClick={() => handleEdit(row)}>
          Editar
        </Button>
      ),
    },
    {
      name: 'Deletar',
      cell: (row) => (
        <Button
          onClick={() => deleteUserQuery.mutateAsync(row.id)}
          disabled={row.ind_inativo === 1}
        >
          Deletar
        </Button>
      ),
    },
  ]

  return columns
}

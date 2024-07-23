import { TableColumn } from 'react-data-table-component'
import { TeamPk } from '../../../services/interfaces'
import Button from '../../../components/Button'

export const TeamColumns = ({
  deleteTeamQuery,
  handleEdit,
}: any): TableColumn<TeamPk>[] => {
  const columns: TableColumn<TeamPk>[] = [
    {
      name: 'ID Dono',
      selector: (row) => row.id_owner,
    },
    {
      name: 'ID Pokémon',
      selector: (row) => row.pokemon_id,
      sortable: true,
    },
    {
      name: 'Nome Pokémon',
      selector: (row) => row.pokemon_name,
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
        <Button onClick={() => deleteTeamQuery.mutateAsync(row.pokemon_id)}>
          Deletar
        </Button>
      ),
    },
  ]

  return columns
}

import { TableColumn } from "react-data-table-component";
import { TeamPk } from "../../../services/interfaces";

export const teamColumns: TableColumn<TeamPk>[] = [
  {
    name: 'ID Pokémon',
    selector: row => row.pokemonId,
    sortable: true,
  },
  {
    name: 'Nome Pokémon',
    selector: row => row.pokemonName,
    sortable: true,
  },
];


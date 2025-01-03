import type {QTableProps} from "quasar";
import type { User } from "../types";

export default function useUserTableColumns(): QTableProps['columns'] {
  return [
    {
      name: 'user',
      label: 'Korisnik',
      align: 'left',
      field: (row: User) => `${row.name} ${row.surname}`,
      sortable: true
    },
    {name: 'email', align: 'left', label: 'E-mail', field: 'email', sortable: true},
    {
      name: 'accountState',
      label: 'Status naloga',
      field: 'is_active',
      sortable: true,
      format: (val: boolean) => val ? 'AKTIVAN' : 'NEAKTIVAN',
      align: 'center'
    },
    {name: 'details', label: 'Kartica korisnika', field: 'details', align: 'center'}
  ]
}

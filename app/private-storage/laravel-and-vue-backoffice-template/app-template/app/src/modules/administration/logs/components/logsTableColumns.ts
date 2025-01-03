import type {QTableProps} from "quasar";

export default function useLogsTableColumns(): QTableProps['columns'] {
  return [
    {
      name: 'requestTimeStamp',
      label: 'Vreme',
      align: 'left',
      field: 'requestTimeStamp',
      sortable: true
    },
    {
      name: 'user',
      align: 'left',
      label: 'Korisnik',
      field: 'user',
      sortable: true
    },
    {
      name: 'status',
      label: 'Status ',
      field: 'status',
      sortable: true,
      align: 'center'
    },
    {name: 'details', label: 'Detalji', field: 'details', align: 'center'}
  ]
}

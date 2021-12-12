import { format } from 'date-fns' 

export const formattedData = start => {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm')
}
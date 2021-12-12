import { formatDistanceStrict } from 'date-fns'

export const durationTime = (start, end) => {
  return formatDistanceStrict(new Date(start), new Date(end))
}
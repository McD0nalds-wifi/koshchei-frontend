import { useSelector } from 'react-redux'

import { RootState } from '@/shared/store'

export const useAppSelector = useSelector.withTypes<RootState>()

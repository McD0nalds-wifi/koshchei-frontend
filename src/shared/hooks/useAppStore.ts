import { useStore } from 'react-redux'

import { AppStore } from '@/shared/store'

export const useAppStore = useStore.withTypes<AppStore>()

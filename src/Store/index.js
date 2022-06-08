import { configureStore } from '@reduxjs/toolkit'
import user from './Slices/pokemonSlice'
export default configureStore({
  reducer: {
      user

	}
})
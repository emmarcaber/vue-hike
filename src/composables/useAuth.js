import { ref, computed } from 'vue'

// Shared reactive state across all components
const isLoggedIn = ref(localStorage.getItem('auth') === 'true')

export function useAuth() {
  const login = () => {
    localStorage.setItem('auth', 'true')
    isLoggedIn.value = true
  }

  const logout = () => {
    localStorage.removeItem('auth')
    isLoggedIn.value = false
  }

  const isAuthenticated = computed(() => isLoggedIn.value)

  return {
    isAuthenticated,
    login,
    logout,
  }
}

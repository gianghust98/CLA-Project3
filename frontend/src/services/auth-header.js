export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('userCLA'))

  if (user && user.accessToken) {
    return { 
      Authorization: `Bearer ${user.accessToken}`,
      // for Node.js Express back-end
      'x-access-token': user.accessToken
    }
  } else {
    return {}
  }
}
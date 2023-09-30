import { redirect } from 'react-router-dom';

export function saveAuthToken(token) {
  if (token) {
    localStorage.setItem('token', token);
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 1);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }
}

export function getTokenValidDuration() {
  const storedTokenDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedTokenDate);
  const timeNow = new Date();
  const duration = expirationDate.getTime() - timeNow.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token ) return null;
  
  const tokenDurationTime = getTokenValidDuration();

  if (tokenDurationTime < 0) {
    return 'TOKEN_EXPIRED';
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkTokenLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }

  return null;
}

import { catchError, of } from 'rxjs';
import { AccountService } from '@app/_services';

export function appInitializer(accountService: AccountService) {
  return () =>
    accountService.refreshToken().pipe(
      catchError((err) => {
        console.log('Refresh token error (expected if not logged in):', err.status);
        return of(null);
      })
    );
}
# Employee Creator

## Routing

- `/` - GET All the employees
  - [Add employee] button -> `/add`
  - [Edit] button -> PATCH `/edit/{id}`
  - [Remove] button -> DELETE `/{id}`
- `/add` - Form - POST a new employee
- `/edit/{id}` - Form - GET & PATCH an existing employee

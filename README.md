# Employee Creator

## Routing

- `/` - GET All the employees
  - [Add employee] button -> `/add`
  - [Edit] button -> PATCH `/employees/{id}`
  - [Remove] button -> DELETE `/employees/{id}`
- `/add` - Form - POST a new employee
- `/employees/{id}` - Form - GET & PATCH an existing employee

## List of todos

- [ ] filter the list after `DELETE` an item
- [ ] install Redux and use it
- [ ] use axios
- [ ] align layouts of the page
- [ ] create a helper function to calculate years of employment

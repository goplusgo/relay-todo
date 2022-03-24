# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Creating Tables<a name="create_tables" />](#creating-tablesa-namecreate_tables-)
    - [Authors](#authors)
    - [Todos](#todos)
  - [Adding Tables Relationship](#adding-tables-relationship)
    - [Authors Table Relationship](#authors-table-relationship)
    - [Todos Table Relationship](#todos-table-relationship)

## Creating Tables<a name="create_tables" />

### Authors

Creating a table called **authors** with the following configuration:

| column | type    |
| ------ | ------- |
| id     | oid     |
| name   | text    |
| age    | integer |

![Hasura Authors Table](../assets/images/hasura_table_authors.png)

### Todos

Creating a table called **todos** with the following configuration:

| column    | type    |
| --------- | ------- |
| id        | uuid    |
| title     | text    |
| author_id | integer |

![Hasura Authors Table](../assets/images/hasura_table_todos.png)

> Note: set the **author_id** as foreign key from the **authors** table.

## Adding Tables Relationship

Go to the **Relationship** tab and add object relationships for these two tables

### Authors Table Relationship

![Hasura Authors Table Relationship](../assets/images/hasura_table_authors_relationship.png)

### Todos Table Relationship

![Hasura Todos Table Relationship](../assets/images/hasura_table_todos_relationship.png)

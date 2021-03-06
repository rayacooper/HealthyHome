SELECT u.user_id as user, cd.completed_date_id as id, ut.users_todos_id as todo_ID, list.todo_item, cd.completed_date as last_completed_date, list.frequency_id, list.active
FROM user_todos_table ut 
JOIN users u ON u.user_id = ut.user_id
JOIN completed_date_table cd ON cd.users_todos_id = ut.users_todos_id
JOIN list_todos_table list ON list.todo_id = ut.todo_id
where active = 't' and u.user_id = ${id}
import React from 'react';

type Props = {
  userName: string,
};

export default function TodoHeader(props: Props) {
  return <h2>Todo List for user: {props.userName}</h2>;
}

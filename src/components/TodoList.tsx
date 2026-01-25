import React, { useState } from 'react';

// TODO: TodoItem 인터페이스 정의 필요
// - id, title, completed, createdAt 필드 필요

// TODO: TodoListProps 인터페이스 정의 필요

export const TodoList: React.FC = () => {
  // TODO: todos 상태 관리 추가
  // TODO: 입력 필드 상태 관리 추가

  // TODO: addTodo 함수 구현 필요
  // - 빈 입력값 체크
  // - 새 todo 추가
  // - 입력 필드 초기화

  // TODO: toggleTodo 함수 구현 필요
  // - id로 todo 찾기
  // - completed 상태 토글

  // TODO: deleteTodo 함수 구현 필요
  // - id로 todo 삭제

  // TODO: 완료된 todo 개수 계산

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Todo List</h1>

      {/* TODO: 입력 폼 구현 */}
      {/* - 입력 필드 */}
      {/* - 추가 버튼 */}
      {/* - Enter 키로도 추가 가능하게 */}

      {/* TODO: Todo 목록 렌더링 */}
      {/* - 각 todo 아이템 표시 */}
      {/* - 체크박스로 완료 상태 토글 */}
      {/* - 삭제 버튼 */}

      {/* TODO: 통계 표시 */}
      {/* - 전체 개수 */}
      {/* - 완료된 개수 */}
    </div>
  );
};

export default TodoList;

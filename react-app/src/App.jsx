import React, { useState } from 'react';
import './App.css'; // 上のCSSファイルを読み込み

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'デザインシステムを整理する', completed: false },
    { id: 2, text: 'ミーティングの議事録を送る', completed: true },
    { id: 3, text: 'プロトタイプのフィードバックをまとめる', completed: false },
  ]);

  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputText.trim(), completed: false },
    ]);
    setInputText('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="container">
      <button className="btn-preview">プレビュー</button>

      <div className="main-content">
        <div className="header">
          <p className="header-date">2026年8月4日(火)</p>
          <h1 className="header-title">Todo</h1>
          <div className="header-count">
            <span><strong>{activeCount}</strong> 残り</span>
            <span><strong>{completedCount}</strong> 完了</span>
          </div>
        </div>

        <form onSubmit={handleAdd} className="todo-form">
          <input
            type="text"
            placeholder="新しいタスクを入力..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="todo-input"
          />
          <button type="submit" className="btn-add">追加</button>
        </form>

        <div className="tab-container">
          <button
            onClick={() => setFilter('all')}
            className={`tab-button ${filter === 'all' ? 'active' : ''}`}
          >
            すべて
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`tab-button ${filter === 'active' ? 'active' : ''}`}
          >
            未完了
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`tab-button ${filter === 'completed' ? 'active' : ''}`}
          >
            完了済み
          </button>
        </div>

        <div className="todo-list">
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
              className="todo-item"
            >
              <div className={`checkbox ${todo.completed ? 'checked' : ''}`}>
                {todo.completed && '✓'}
              </div>
              <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
              </span>
            </div>
          ))}
        </div>

        <div className="clear-container">
          <button onClick={clearCompleted} className="btn-clear">
            完了済みを削除
          </button>
        </div>
      </div>

      <button className="btn-help">?</button>
    </div>
  );
}

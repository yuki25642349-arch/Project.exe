"use client";

import { shipporiMincho } from "./fonts";
import { useEffect, useState } from "react";
export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [searchText, setSearchText] = useState("");
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");
  const [goal, setGoal] = useState("");
  useEffect(() => {
    if (selectedDay !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedDay]);

  const [records, setRecords] = useState<
    Record<number, { title: string; memo: string; goal: string }>
  >({});
  const saveRecord = () => {
    if (selectedDay === null) return;

    setRecords((prev) => ({
      ...prev,
      [selectedDay]: {
        title,
        memo,
        goal,
      },
    }));

    setSelectedDay(null);
    setTitle("");
    setMemo("");
    setGoal("");
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const today = new Date();

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };
  const deleteRecord = () => {
    if (selectedDay === null) return;

    const isConfirmed = window.confirm(
      `${year}年${month + 1}月${selectedDay}日の記録を削除しますか？`,
    );

    if (!isConfirmed) return;

    setRecords((prev) => {
      const newRecords = { ...prev };

      delete newRecords[selectedDay];

      return newRecords;
    });

    setSelectedDay(null);
  };
  const openDay = (day: number) => {
    const record = records[day];

    if (record) {
      setTitle(record.title);
      setMemo(record.memo);
      setGoal(record.goal);
    } else {
      setTitle("");
      setMemo("");
      setGoal("");
    }

    setSelectedDay(day);
  };
  return (
    <main className={`calendar-page ${shipporiMincho.className}`}>
      <header className="calendar-header">
        
        <h1>Calendar</h1>

        <input
          type="text"
          placeholder="タイトルを検索"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <div className="month-selector">
          <button className="month-button" onClick={previousMonth}>
            <span className="arrow">←</span>
            <span className="button-text">PREV</span>
          </button>

          <h2>
            <span className="year">{year}</span>
            <span className="slash"> / </span>
            <span className="month">{String(month + 1).padStart(2, "0")}</span>
          </h2>

          <button className="month-button" onClick={nextMonth}>
            <span className="button-text">NEXT</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </header>
      <div className="weekdays">
        <div>SUN</div>
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
        <div>THU</div>
        <div>FRI</div>
        <div>SAT</div>
      </div>
      <div className="calendar-grid">
        {Array.from({ length: firstDay }).map((_, index) => (
          <div className="calendar-day empty-day" key={`empty-${index}`} />
        ))}

        {days.map((day) => {
          const record = records[day];

          const isMatch =
            searchText === "" ||
            record?.title.toLowerCase().includes(searchText.toLowerCase());

          return (
            <div
              className={`calendar-day
        ${isToday(day) ? "today" : ""}
        ${!isMatch ? "search-hidden" : ""}
      `}
              key={day}
              onClick={() => openDay(day)}
            >
              <span>{day}</span>

              {record && (
                <div className="record-preview">
                  <p>{record.title}</p>
                  <small>{record.memo}</small>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedDay !== null && (
        <div className="modal-overlay">
          <div className="day-modal">
            <button
              className="close-button"
              onClick={() => setSelectedDay(null)}
            >
              ×
            </button>

            <p className="modal-label">DAILY RECORD</p>

            <h2 className="modal-date">
              {year} / {month + 1} / {selectedDay}
            </h2>

            <input
              type="text"
              placeholder="タイトルを入力"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="record-fields">
              <div className="record-field">
                <p className="input-label">やったこと</p>

                <textarea
                  placeholder="今日やったことを入力"
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                />
              </div>

              <div className="record-field">
                <p className="input-label">この日までの目標</p>

                <textarea
                  placeholder="この日までに達成したい目標を入力"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-actions">
              <button className="save-button" onClick={saveRecord}>
                保存
              </button>

              {records[selectedDay] && (
                <button className="delete-button" onClick={deleteRecord}>
                  削除
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

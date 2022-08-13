import React from 'react';

import '../../App.css';
import './Todo.css';
import ScrollToTop from '../ScrollToTop';

function Todo() {
  return (
    <>
      <ScrollToTop>
        <div className='todo-container'>
          <h1>Alexander Wang's TODO list</h1>
          <div className='todo-content'>
            <p>
              Hello! You've made it to my personal todo list. This page is
              not publicly listed but you are welcome nevertheless.
              It is intended to be a place for me to write down my goals
              and ideas for the near future, as well as a place to reflect
              upon my achievements of the recent past. Come and stay a while,
              and feel free to contact me if anything here piques your
              interest.
            </p>
            <h3>2022 Objectives</h3>
            <table>
              <tr>
                <th>Description</th>
                <th>Date created</th>
                <th>Estimated Date Complete</th>
                <th>Notes</th>
              </tr>
              <tr className="done">
                <td>Create personal website and host it</td>
                <td>2022-01-25</td>
                <td>2022-06-20</td>
                <td></td>
              </tr>
              <tr className="done">
                <td>Read Mastering Blockchain</td>
                <td>2022-07-01</td>
                <td>2022-07-23</td>
                <td></td>
              </tr>
              <tr className="undone">
                <td>Read 20,000 Leagues Under the Sea</td>
                <td>2022-07-25</td>
                <td>2022-08-20</td>
                <td></td>
              </tr>
              <tr className="undone">
                <td>Read Slicing Pie</td>
                <td>2022-08-13</td>
                <td>2022-09-13</td>
                <td></td>
              </tr>
              <tr className="undone">
                <td>Create personal blog page</td>
                <td>2022-08-13</td>
                <td>2022-12-31</td>
                <td></td>
              </tr>
            </table>
            <h3>2023 Objectives</h3>
            <table>
              <tr>
                <th>Description</th>
                <th>Date created</th>
                <th>Estimated Date Complete</th>
                <th>Notes</th>
              </tr>
              <tr className="undone">
                <td>Create household memory aid app</td>
                <td>2022-08-13</td>
                <td>2023-08-15</td>
                <td></td>
              </tr>
              <tr className="undone">
                <td>Start Square Zero YouTube Channel</td>
                <td>2022-08-13</td>
                <td>2023-01-31</td>
                <td></td>
              </tr>
              <tr className="undone">
                <td>Build rainbow Lego UCS Star Destroyer</td>
                <td>2022-08-13</td>
                <td>2023-08-31</td>
                <td></td>
              </tr>
              <tr className="undone">
                <td>Develop business proposal for internet privacy service</td>
                <td>2022-08-13</td>
                <td>2023-08-31</td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </ScrollToTop>
    </>
  )
}

export default Todo;

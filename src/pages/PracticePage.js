import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { axiosGetRequest } from '../api';

export default function PracticePage() {
  const { languages, types } = useParams();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [problems, setProblems] = useState();

  useEffect(() => {
    const getProblems = async () => {
      const response = await axiosGetRequest(
        process.env.REACT_APP_SERVER_URL + `/languages/${languages}`,
        { params: { type: types } },
      );

      setProblems(response.data);
    };

    isLoggedIn && getProblems();
  }, [types]);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>hello world</h1>
          <div>
            {problems?.map((list, index) => {
              return (
                <div key={index}>
                  {list[languages]?.map((val, idx) => (
                    <div style={{ whiteSpace: 'pre-wrap' }} key={idx}>
                      {val}
                      <div>-------------------------</div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <p>로그인 해야 합니다</p>
          <Link to="/">뒤로가기</Link>
        </div>
      )}
    </div>
  );
}

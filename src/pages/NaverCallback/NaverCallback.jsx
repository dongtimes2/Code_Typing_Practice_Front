import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { postNaverLogin } from '../../api/login';
import Button from '../../components/Button/Button';
import { PATH } from '../../constants/path';
import useAuth from '../../hooks/useAuth';
import { useUserInfoStore } from '../../store';
import { TokenController } from '../../utils/tokenController';

const NaverCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tokenController = new TokenController();
  const params = new URLSearchParams(location.search);
  const code = params.get('code');

  const setUserNickname = useUserInfoStore((state) => state.setUserNickname);
  const setUserProfileImage = useUserInfoStore(
    (state) => state.setUserProfileImage,
  );
  const setPracticeNumber = useUserInfoStore(
    (state) => state.setPracticeNumber,
  );
  const setSound = useUserInfoStore((state) => state.setSound);
  const setIsColorWeakness = useUserInfoStore(
    (store) => store.setIsColorWeakness,
  );

  const { setIsLoggedin } = useAuth();

  const { mutate, isError } = useMutation({
    mutationFn: postNaverLogin,
    onSuccess: (response) => {
      tokenController.setAccessToken(response.accessToken);
      setUserNickname(response.nickname);
      setUserProfileImage(response.profileImage);
      setPracticeNumber(response.practiceNumber);
      setSound(response.sound);
      setIsColorWeakness(response.isColorWeakness);
      setIsLoggedin(true);
      navigate(PATH.HOME);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleButtonClick = () => {
    navigate(PATH.HOME);
  };

  useEffect(() => {
    mutate(code);
  }, [mutate, code]);

  return (
    <>
      {isError ? (
        <>
          <p>로그인에 실패했습니다</p>
          <Button onClick={handleButtonClick}>첫 화면으로 돌아가기</Button>
        </>
      ) : (
        <div>로그인 중입니다</div>
      )}
    </>
  );
};

export default NaverCallback;

import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NaverButton from './components/NaverButton';
import Layout from './layout/Layout';
import { postNaverLogin } from '../../api/login';
import { PATH } from '../../constants/path';
import useAuth from '../../hooks/useAuth';
import { useUserInfoStore } from '../../store';
import { appRuntime } from '../../utils/appRuntime';
import { TokenController } from '../../utils/tokenController';

const Login = () => {
  const navigate = useNavigate();

  const tokenController = new TokenController();

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

  const { mutate } = useMutation({
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
  });

  const [token, setToken] = useState('');

  appRuntime?.on('naverToken', (event, naverToken) => {
    setToken(naverToken);
  });

  useEffect(() => {
    if (token) {
      mutate(token);
    }
  }, [token, mutate]);

  return (
    <Layout>
      <div className="moduleArea">
        <NaverButton />
      </div>
    </Layout>
  );
};

export default Login;

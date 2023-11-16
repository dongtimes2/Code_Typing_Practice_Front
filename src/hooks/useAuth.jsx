import { useEffect, useMemo } from 'react';

import { useGetUser } from '../api/user';
import { useUserInfoStore } from '../store';
import { TokenController } from '../utils/tokenController';

const useAuth = () => {
  const isLoggedin = useUserInfoStore((state) => state.isLoggedin);
  const setIsLoggedin = useUserInfoStore((state) => state.setIsLoggedin);
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

  const tokenController = useMemo(() => {
    return new TokenController();
  }, []);

  const { data } = useGetUser(tokenController.getAccessToken());

  const logout = () => {
    setIsLoggedin(false);
    tokenController.clear();
  };

  useEffect(() => {
    const accessToken = tokenController.getAccessToken();

    if (accessToken) {
      setUserNickname(data?.nickname ?? '');
      setUserProfileImage(data?.profileImage ?? '');
      setPracticeNumber(data?.practiceNumber ?? 10);
      setSound(data?.sound ?? true);
      setIsColorWeakness(data?.isColorWeakness ?? false);
      setIsLoggedin(true);
    }
  }, [
    setIsLoggedin,
    tokenController,
    data,
    setUserNickname,
    setUserProfileImage,
    setPracticeNumber,
    setSound,
    setIsColorWeakness,
  ]);

  return { isLoggedin, setIsLoggedin, logout };
};

export default useAuth;

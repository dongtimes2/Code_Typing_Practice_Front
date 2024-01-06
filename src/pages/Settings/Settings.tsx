import RecordModule from './components/RecordModule/RecordModule';
import SettingModule from './components/SettingModule';
import Layout from './layout/Layout';

const Settings = () => {
  return (
    <Layout>
      <SettingModule />
      <RecordModule />
    </Layout>
  );
};

export default Settings;

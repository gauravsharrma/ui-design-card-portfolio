import React from 'react';
import { Palette } from '../../../types';
import OriginalIcon from '../../shared/Icon';

const Icon: React.FC<{name: string, className: string, style?: any}> = ({name, ...props}) => {
    switch (name) {
        case 'bell': return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
        default: return <OriginalIcon name={name} {...props} />;
    }
}

const IOSLightContent: React.FC<{ palette: Palette }> = ({ palette }) => {
  const SettingsRow = ({ icon, color, title }: { icon: string; color: string; title: string }) => (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: color }}>
          <Icon name={icon} className="w-5 h-5 text-white" />
        </div>
        <span className="font-medium" style={{ color: palette.text }}>{title}</span>
      </div>
      <div className="w-12 h-7 rounded-full p-1" style={{ backgroundColor: palette.accent }}>
        <div className="w-5 h-5 bg-white rounded-full shadow-sm transform translate-x-5"></div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: palette.background }}>
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: palette.text }}>App Settings</h2>
          <div className="bg-white rounded-xl shadow-sm p-4 divide-y" style={{borderColor: palette.background}}>
            <SettingsRow icon="bell" color="#EF4444" title="Notifications" />
            <SettingsRow icon="shield" color="#3B82F6" title="Privacy" />
            <SettingsRow icon="sun" color="#F59E0B" title="Appearance" />
            <SettingsRow icon="accessibility" color="#10B981" title="Accessibility" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default IOSLightContent;
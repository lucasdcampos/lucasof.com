import { FaCopy } from 'react-icons/fa';

interface ContactCardProps {
  title: string;
  description: string | React.ReactNode;
  icon: React.ReactNode;
  copyValue: string;
  onCopy: (val: string) => void;
}

export default function ContactCard({ title, description, icon, copyValue, onCopy }: ContactCardProps) {
  return (
    <div className="bg-[var(--panel-bg-color)] border border-gray-200 dark:border-gray-800 p-6 rounded-xl transition-colors h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4 text-xl">
          {icon}
          <h2 className="font-semibold text-[var(--text-color)]">{title}</h2>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {description}
        </div>
      </div>

      <div 
        onClick={() => onCopy(copyValue)}
        className="bg-black/5 dark:bg-black/50 rounded-lg p-3 text-[10px] md:text-[11px] font-mono text-gray-500 break-all cursor-pointer hover:bg-black/10 dark:hover:text-gray-300 border border-gray-200 dark:border-white/5 transition-colors flex justify-between items-center group mt-auto"
      >
        <span className="truncate mr-2">{copyValue}</span>
        <FaCopy className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}
import React from 'react';
import { Play, Users, Globe } from 'lucide-react';

interface LiveSession {
  id: string;
  title: string;
  company: string;
  viewers: number;
  thumbnail: string;
  category: string;
}

const liveSessions: LiveSession[] = [
  {
    id: '1',
    title: 'Factory Tour: Electronics Manufacturing',
    company: 'TechPro Electronics',
    viewers: 1234,
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    category: 'Electronics'
  },
  {
    id: '2',
    title: 'New Collection Preview: Summer Fashion',
    company: 'StyleHub International',
    viewers: 856,
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    category: 'Fashion'
  },
  {
    id: '3',
    title: 'Product Demo: Smart Home Devices',
    company: 'HomeConnect Solutions',
    viewers: 2156,
    thumbnail: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800',
    category: 'Smart Home'
  }
];

export const LiveB2BSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Play size={24} className="text-red-600" fill="currentColor" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full animate-ping" />
          </div>
          <h2 className="text-xl font-bold">Live B2B Sessions</h2>
        </div>
        <button className="text-blue-600 hover:text-blue-700">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveSessions.map((session) => (
          <div key={session.id} className="group relative rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={session.thumbnail}
                alt={session.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
              <div className="absolute top-2 left-2 px-2 py-1 bg-red-600 text-white rounded-full text-xs font-medium flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                LIVE
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-60 text-white rounded-full text-xs flex items-center gap-1">
                <Users size={12} />
                {session.viewers.toLocaleString()}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600">
                {session.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Globe size={14} />
                  {session.company}
                </span>
                <span className="text-blue-600">{session.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
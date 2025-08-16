import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <Code className="footer-icon" />
          <span>Built with</span>
          <Heart className="footer-heart" />
          <span>by our Group-7 </span>
        </div>
        <div className="footer-copyright">
          <span>&copy; 2025 Portfolio Group. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
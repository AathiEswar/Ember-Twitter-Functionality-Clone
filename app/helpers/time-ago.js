import { helper } from '@ember/component/helper';

export default helper(function timeAgo(timestamp/*, hash*/) {
  const now = Date.now();
  const diff = Math.floor((now - timestamp) / 1000); // in seconds
  if(diff <=0 ){
    return `just now`;
  }
  else if (diff < 60) {
    return `${diff}s ago`;
  } else if (diff < 3600) {
    const mins = Math.floor(diff / 60);
    return `${mins}m ago`;
  } else if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours}h ago`;
  } else if (diff < 2592000) { // 30 days
    const days = Math.floor(diff / 86400);
    return `${days}d ago`;
  } else if (diff < 31536000) { // 12 months
    const months = Math.floor(diff / 2592000);
    return `${months}mo ago`;
  } else {
    const years = Math.floor(diff / 31536000);
    return `${years}y ago`;
  }
});

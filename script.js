// Optional: Add typing animation effect
document.querySelectorAll('.command').forEach((line, index) => {
    line.style.opacity = 0;
    setTimeout(() => {
      line.style.opacity = 1;
    }, index * 300);
  });
  

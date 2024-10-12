<template>
    <div id="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <h2 class="brand-name">Mens LifeStyle</h2>
          <p class="description">
            Your ultimate destination for modern, stylish men's wear. Discover our collection and elevate your wardrobe with premium quality.
          </p>
        </div>
  
        <div class="footer-links">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
  
        <div class="footer-socials">
            <p class="follow-us">Follow Us:</p>
            <div class="social-icons">
                <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
            </div>
        </div>
      </div>
  
      <div class="footer-bottom">
        <p>&copy; 2024 Mens LifeStyle. All rights reserved.</p>
      </div>
    </div>
  </template>
  <style lang="scss">
  #footer {
    @apply bg-gray-900 text-white py-10 mt-[30px];
    
    .footer-content {
      @apply flex flex-col md:flex-row justify-between items-center md:items-start px-10 md:px-40;
  
      .footer-brand {
        @apply mb-6 md:mb-0;
  
        .brand-name {
          @apply text-2xl font-bold mb-2;
        }
  
        .description {
          @apply text-gray-400 w-[80%];
        }
      }
  
      .footer-links {
        @apply mb-6 md:mb-0;
  
        ul {
          @apply flex flex-col gap-3 text-gray-400;
  
          li a {
            @apply hover:text-white transition duration-200;
          }
        }
      }
  
      .footer-socials {
        .follow-us {
          @apply text-lg font-semibold mb-2;
        }
  
        .social-icons {
          @apply flex gap-4;
  
          a {
            @apply text-gray-400 hover:text-white transition duration-200;
          }
  
          i {
            @apply text-xl;
          }
        }
      }
    }
    .footer-bottom {
      @apply mt-6 text-center text-gray-400 text-sm;
    }
  }
  </style>
  
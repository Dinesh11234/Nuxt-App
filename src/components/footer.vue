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
          <li><a href="#"><i class="fas fa-info-circle"></i> About Us</a></li>
          <li><a href="#"><i class="fas fa-phone"></i> Contact</a></li>
          <li><a href="#"><i class="fas fa-user-shield"></i> Privacy Policy</a></li>
          <li><a href="#"><i class="fas fa-file-contract"></i> Terms of Service</a></li>
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
  @apply bg-gradient-to-r from-gray-900 to-black text-white py-10 mt-[30px] transition-all duration-300 ease-in-out;

  .footer-content {
    @apply flex flex-col md:flex-row justify-between items-center md:items-start px-10 md:px-40 space-y-10 md:space-y-0;

    .footer-brand {
      @apply mb-6 md:mb-0 text-center md:text-left;

      .brand-name {
        @apply text-3xl font-bold mb-2 text-yellow-500;
      }

      .description {
        @apply text-gray-400 w-[90%] md:w-[75%] leading-relaxed;
      }
    }

    .footer-links {
      @apply mb-6 md:mb-0 text-center md:text-left;

      ul {
        @apply flex flex-col gap-3 text-gray-400 text-base;

        li a {
          @apply flex items-center gap-2 hover:text-yellow-500 hover:underline transition duration-300;
        }
      }
    }

    .footer-socials {
      @apply text-center;

      .follow-us {
        @apply text-lg font-semibold mb-3 text-yellow-500;
      }

      .social-icons {
        @apply flex justify-center md:justify-start gap-4 text-xl;

        a {
          @apply text-gray-400 hover:text-yellow-500 transition duration-300 transform hover:scale-110;
        }
      }
    }
  }

  .footer-bottom {
    @apply mt-6 text-center text-gray-400 text-sm border-t border-gray-700 pt-4;
  }
}
</style>

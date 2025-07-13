<template>
    <div class="welcome">
        <img decoding="async" width="1400" height="800" class="landing-image" alt="panorama" :src="cookies"
            data-object-fit="cover" loading="lazy" /><span aria-hidden="true"
            class="wp-block-cover__background has-background-dim-30 has-background-dim"
            style="background-color: #526a71"></span>
        <div class="landing-text">
            <h1 class="landing-title">
                COOKIES PRIVACY POLICY
            </h1>
        </div>
    </div>

    <section id="cookie-policy-text">
        <h3>Cuore di Bosco Cookie Policy</h3>
        <p>This website (<strong>cuoredibosco.it</strong>) uses cookies to ensure proper functioning and improve users’
            browsing experience.</p>

        <h3>What are cookies</h3>
        <p>Cookies are small text files that websites send to the user's device during browsing. They are used to
            collect information about how the user uses the site, to store preferences, and to provide personalized
            content.</p>

        <h3>Types of cookies used</h3>
        <ol>
            <li><strong>Technical cookies (necessary):</strong> essential for the correct functioning of the site and do
                not require user consent.</li>
            <li><strong>Functionality cookies:</strong> allow the site to remember the user’s choices (such as language
                or login credentials). They can be disabled, but some features may not be available.</li>
            <li><strong>Third-party cookies (analytics and profiling):</strong> tools like Google Analytics, maps, or
                social plugins that collect data for statistical or advertising purposes. These cookies require explicit
                user consent.</li>
        </ol>

        <h3>Cookies used on this site</h3>
        <p>The site may use:</p>
        <ul>
            <li>Google Analytics to collect anonymous information about site usage.</li>
            <li>Social plugins (e.g., Facebook, Instagram) to share content.</li>
            <li>Booking or embedded maps (e.g., Google Maps, booking systems).</li>
        </ul>

        <h3>How to manage cookies</h3>
        <p>You can manage cookie preferences directly from the banner shown when opening the site. Additionally, you can
            disable them from your browser by following these specific instructions:</p>
        <ul>
            <li><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener">Google
                    Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                    target="_blank" rel="noopener">Mozilla
                    Firefox</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank" rel="noopener">Microsoft Edge</a></li>
            <li><a href="https://support.apple.com/en-us/guide/safari/sfri11471/mac" target="_blank"
                    rel="noopener">Safari (Mac)</a></li>
        </ul>

        <h3>Data Controller</h3>
        <p><strong>Cuore di Bosco – B&B</strong><br>
            Email: <em>info@cuoredibosco.it</em><br>
        </p>
    </section>
</template>


<script setup lang="ts">
import cookies from "~/assets/images/cookies.webp";

definePageMeta({
    layout: 'english'
});
</script>


<style scope>
.landing-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center 26%;
    display: block;
}

.landing-text {
    position: relative;
}

.landing-title {
    color: white;
    line-height: 1.25;
    font-size: 64px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.landing-title strong {
    font-weight: 15555;
}

.welcome {
    position: relative;
    overflow: hidden;
}

.landing-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
}

#cookie-policy-text {
    margin-top: 15px;
    padding-left: 15px;
    padding-right: 10px;
}

#cookie-policy-text h3 {
    margin-top: 1em;
}

#cookie-policy-text a {
    text-decoration: underline;
}
</style>
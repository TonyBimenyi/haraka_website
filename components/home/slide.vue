<template>
    <div class="slide_container">
        <div class="slide_details">
            <h1 class="slide_title">Welcome to Haraka</h1>
            <h1 class="slide_subtitle">Event Planner</h1>
            <p>Every event could be perfect</p>
            <div class="buttons">
                <div class="button1">
                    <button>ABOUT US</button>
                </div>
                <div class="button2">
                    <button>GET STARTED</button>
                </div>
            </div>
        </div>
        <div class="direction_button">
            <div class="next_btn">
                <p>
                    <Icon icon="mdi:arrow-left" width="24" height="24" />
                </p>
                
            </div>
            <div class="prev_btn">
                <p>
                    <Icon icon="mdi:arrow-right" width="24" height="24" />
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import "@/assets/css/slide.css"
</script>

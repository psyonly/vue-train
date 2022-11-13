<template>
    <div>
        <h1>video page</h1>
        <video id="video" class="video" controls 
        src="http://127.0.0.1:9000/vue/[VCB-S]Bakemonogatari[01][Hi10p_1080p][BDRip][x264_2flac].mkv">
        </video>
    </div>
</template>

<script>
import ASS from 'assjs'
export default {
    data() {
        fetch('http://127.0.0.1:9000/vue/[VCB-S]Bakemonogatari[01][Hi10p_1080p][BDRip][x264_2flac].a.ass')
        .then(res => res.arrayBuffer())
        .then(buffer => {
            const decoder = new TextDecoder("utf-16");
            const text = decoder.decode(buffer);
            var v = document.getElementById('video')
            const ass = new ASS(text, document.getElementById('video'));
        });
        return {}
    }
}
</script>

<style lang="less" scoped>
.video {
    height: 450px;
    width: 800px;
}
</style>

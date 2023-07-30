const html = document.documentElement;
const canvas = document.querySelector('.house-model');
const context = canvas.getContext('2d');

const currentFrame = (index) => (
    `images/image_${index.toString().padStart(3, '0')}.jpg`
);

const totalFrames = 62;

canvas.height = 1080;
canvas.width = 1920;

const frame = new Image();
frame.src = currentFrame(1)

frame.onload = () => {
    context.drawImage(frame, 0, 0);
}

const updateImage = (index) => {
    frame.src = currentFrame(index);
    context.drawImage(frame, 0, 0);
}

window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollNormal = scrollTop / maxScrollTop;
    const frameIndex = Math.min(totalFrames - 1, Math.floor(scrollNormal * totalFrames))

    requestAnimationFrame(() => updateImage(frameIndex + 1))

    console.log({
        frameIndex: frameIndex,
        scrollTopValue: scrollTop,
        normalizedScrollTopValue: scrollNormal,
        maxScrollTop: maxScrollTop,
        scrollHeight: html.scrollHeight,
        innerHeight: window.innerHeight
    });
})
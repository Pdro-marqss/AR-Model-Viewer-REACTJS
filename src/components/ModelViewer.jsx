function ModelViewer({ modelSelected }) {
    return (
        <>
            <model-viewer
                className="model"
                src={modelSelected}
                ar
                ar-modes="webxr quick-look"
                ar-button
                exit-webxr-ar-button
                ar-placement="floor"
                camera-controls
                autoplay
                auto-rotate
                progress-bar
            >
            </model-viewer>
        </>
    )
}

export default ModelViewer;

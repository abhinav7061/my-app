import { useRef, useEffect } from "react";
import createGlobe from "cobe";

export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 400 * 2,
            height: 400 * 2,
            phi: 0,
            theta: 0,
            dark: 0.8,
            diffuse: 1.5,
            mapSamples: 16000,
            mapBrightness: 9,
            baseColor: [0, 0.1, 0.65],
            markerColor: [0, 0.1, 0.231],
            glowColor: [0.3, 0.5, 1],
            opacity: 0.7,
            markers: [
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
            className={className}
        />
    );
};

import cv2
import os

def video_to_frames(video_path, output_dir, fps=60):
    cap = cv2.VideoCapture(video_path)
    
    if not cap.isOpened():
        print("Error: Could not open video")
        return
    
    os.makedirs(output_dir, exist_ok=True)
    
    original_fps = cap.get(cv2.CAP_PROP_FPS)
    frame_interval = max(1, int(original_fps / fps))
    
    frame_count = 0
    saved_count = 0
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
            
        if frame_count % frame_interval == 0:
            frame_filename = os.path.join(output_dir, f"frame_{saved_count:06d}.jpg")
            cv2.imwrite(frame_filename, frame)
            saved_count += 1
            
        frame_count += 1
    
    cap.release()
    print(f"Extracted {saved_count} frames to {output_dir}")

# Usage
if __name__ == "__main__":
    video_path = "input_video.mp4"  # Replace with your video path
    output_dir = "frames"
    video_to_frames(video_path, output_dir, fps=60)
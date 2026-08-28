#!/usr/bin/env python3
"""
Frame Sequence Extraction & Watermark Inpainting Pipeline
Processes 1080p reconstructed video clips into WebP frame sequences with delogo inpainting.
"""
import os
import subprocess

CLIPS = [
    {
        'id': 'seq-01-origins',
        'file': 'Teenage_girl_looking_through_window_202608290215.mp4',
        'fps': 8,
    },
    {
        'id': 'seq-02-medicine',
        'file': 'Woman_studying_anatomy_at_desk_202608290214.mp4',
        'fps': 8,
    },
    {
        'id': 'seq-03-calling',
        'file': 'Woman_doctor_walking_hospital_co…_202608290215.mp4',
        'fps': 8,
    },
    {
        'id': 'seq-04-singapore',
        'file': 'Woman_doctor_in_medical_clinic_202608290214.mp4',
        'fps': 7,
    },
    {
        'id': 'seq-05-clinic',
        'file': 'Doctor_examining_patient_in_clinic_202608290214.mp4',
        'fps': 7,
    }
]

BASE_OUT = 'public/sequences'

def main():
    for item in CLIPS:
        if not os.path.exists(item['file']):
            print(f"Skipping {item['file']} (file not found in root)")
            continue
        out_dir = os.path.join(BASE_OUT, item['id'])
        os.makedirs(out_dir, exist_ok=True)
        out_pattern = os.path.join(out_dir, 'frame_%03d.webp')
        
        cmd = [
            'ffmpeg', '-y',
            '-i', item['file'],
            '-vf', f'delogo=x=1670:y=830:w=180:h=160,fps={item["fps"]},scale=1600:-1:flags=lanczos',
            '-c:v', 'libwebp',
            '-quality', '82',
            '-compression_level', '4',
            out_pattern
        ]
        print(f"Extracting frames for {item['id']}...")
        subprocess.run(cmd, check=True)
        print(f"Complete: {item['id']}")

if __name__ == '__main__':
    main()

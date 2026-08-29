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
        'fps': 24,
    },
    {
        'id': 'seq-02-medicine',
        'file': 'Woman_studying_anatomy_at_desk_202608290214.mp4',
        'fps': 24,
    },
    {
        'id': 'seq-03-calling',
        'file': 'Woman_doctor_walking_hospital_co…_202608290215.mp4',
        'fps': 24,
    },
    {
        'id': 'seq-04-singapore',
        'file': 'Woman_doctor_in_medical_clinic_202608290214.mp4',
        'fps': 24,
    },
    {
        'id': 'seq-05-clinic',
        'file': 'Doctor_examining_patient_in_clinic_202608290214.mp4',
        'fps': 24,
    },
    {
        'id': 'seq-06-commander',
        'file': 'Woman_planning_volunteer_unit_1080p_202608291920.mp4',
        'fps': 24,
    },
    {
        'id': 'seq-07-burma',
        'file': 'Women_traveling_through_tropical…_1080p_202608291920.mp4',
        'fps': 24,
    },
    {
        'id': 'seq-08-jungle',
        'file': 'Women_volunteers_walking_in_jungle_202608291920.mp4',
        'fps': 24,
    },
    {
        'id': 'seq-09-trial',
        'file': 'Archival_documents_on_wooden_table_202608291926.mp4',
        'fps': 24,
    },
    {
        'id': 'seq-10-kanpur',
        'file': 'Doctor_examining_patient_in_clinic_202608291919.mp4',
        'fps': 24,
    },
    {
        'id': 'seq-11-refugee',
        'file': 'Physician_examining_patients_in_…_202608291920.mp4',
        'fps': 24,
    },
    {
        'id': 'seq-12-activist',
        'file': 'Physician_examines_patient_in_cl…_202608291923.mp4',
        'fps': 24,
    }
]

BASE_OUT = 'public/sequences'

def main():
    for item in CLIPS:
        if not os.path.exists(item['file']):
            print(f"Skipping {item['file']} (file not found in root)")
        input_path = os.path.join('source_clips', item['file'])
        if not os.path.exists(input_path):
            print(f"Skipping {input_path} (file not found)")
            continue
        out_dir = os.path.join(BASE_OUT, item['id'])
        os.makedirs(out_dir, exist_ok=True)
        out_pattern = os.path.join(out_dir, 'frame_%03d.webp')
        
        cmd = [
            'ffmpeg', '-y',
            '-i', input_path,
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

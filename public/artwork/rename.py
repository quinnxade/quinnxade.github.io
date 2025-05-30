import os
import shutil

art_folder = os.getcwd()
originals_folder = os.path.join(art_folder, "originals")

# 📁 Create 'originals' folder if it doesn't exist
if not os.path.exists(originals_folder):
    os.makedirs(originals_folder)
    print("📁 Created folder: originals")

# 🚚 Move all *_original.(jpg/png/jpeg) files
for file in os.listdir(art_folder):
    if file.lower().endswith(("_original.jpg", "_original.jpeg", "_original.png")):
        source_path = os.path.join(art_folder, file)
        dest_path = os.path.join(originals_folder, file)
        shutil.move(source_path, dest_path)
        print(f"📦 Moved: {file} → originals/")

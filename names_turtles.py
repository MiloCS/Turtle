import os
print(os.listdir("Turtles"))
Pictures = os.listdir("Turtles")
for i, x in enumerate(Pictures):
	os.rename(f"Turtles/{x}", f"Turtles/turtle{str(i+1)}.jpg")

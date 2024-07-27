
# import asyncio
# import websockets
# import json

# async def redact_data_handler(websocket, path):
#     try:
#         async for message in websocket:
#             data={
#           "1":{
#             "person":["Alice Johnson","James Smith","Emily Wilson","Samantha Davis"],
#             "org":["Quantum Innovations Ltd"],
#             "email":[],
#             "address":[],
#             "phone number":[]
#           },
#           "2":{
#             "person":["Samantha Davis"],
#             "org":["Quantum Innovations Ltd"],
#             "email":["james.smith@email.org", "samantha.davis@email.net", "contact@quantuminnovations.com a"],
#             "address":["789 Pine Road"],
#             "phone number":["+1 (555) 123-4567","+44 20 7123 4567"]
#           },
#           "3":{
#             "person":["Samantha Davis","Michael Brown"],
#             "org":[""],
#             "email":["research@quantuminnovations.com","info@jazzharmony.com",],
#             "address":["456 Oak Avenue","303 Quantum Way, Tech City"],
#             "phone number":["+49 30 1234 5678"]
#           },
#           "4":{
#             "person":["Allison Harper","Michael Brown"],
#             "org":["NexTech Solutions"],
#             "email":["samantha.davis@email.net","info@canvasdreams.gallery"," newsletter@harmonyjazz.com.","researchupdates@bluehorizon.org"],
#             "address":["601 Gallery Street"],
#             "phone number":["+61 2 9876 5432","+1 (555) 987-6543"]
#           },
#           "5":{
#             "person":["James Smith"],
#             "org":[""],
#             "email":["harmonygarden@email.net","chefmaria@gastronomicdelights.com"],
#             "address":[""],
#             "phone number":["+44 20 7654 3210","+49 30 8765 4321","+61 2 3456 7890"]
#           },
#           }
#             await websocket.send(json.dumps(data))
#     except Exception as e:
#         response = {'success': False, 'error': str(e)}
#         await websocket.send(json.dumps(response))


# start_server = websockets.serve(redact_data_handler, "localhost", 8766)


# asyncio.get_event_loop().run_until_complete(start_server)
# asyncio.get_event_loop().run_forever()

import asyncio
import websockets
import json
import openai

async def redact_data_handler(websocket, path):
    try:
        async for message in websocket:
            data = json.loads(message)
            question = data.get("question")
            if not question:
                response_data = {"error": "Missing 'question' field in the request"}
                await websocket.send(json.dumps(response_data))
                return
            
            # Your OpenAI processing code here
            openai.api_key = "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"
            openai.organization = "org-nKtPKJQMossPvk2NG7Uc94fR"
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "user", "content": question},
                ]
            )
            answer = response["choices"][0]["message"]["content"]
        
            response_data = {
                "message": "Question processed successfully",
                "answer": answer
            }
            await websocket.send(json.dumps(response_data))
    except Exception as e:
        response_data = {'success': False, 'error': str(e)}
        await websocket.send(json.dumps(response_data))

start_server = websockets.serve(redact_data_handler, "localhost", 8767)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

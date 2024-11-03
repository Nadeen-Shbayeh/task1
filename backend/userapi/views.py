from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer
from rest_framework.views import APIView
from .models import User

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'userID': serializer.data['id']}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # Provide detailed error messages


@api_view(['GET'])
def get_profile_by_id(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)



class CheckEmailView(APIView):
    def get(self, request, email):
        # Check if the email exists in the database
        try:
            user = User.objects.get(email=email)
            is_registered = True
        except User.DoesNotExist:
            is_registered = False
        
        return Response({'is_registered': is_registered}, status=status.HTTP_200_OK)
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'location', 'phone', 'email', 'description', 'rating']

    def validate_rating(self, value):
        if value is None:
            raise serializers.ValidationError("Rating cannot be null")
        if not (0 <= value <= 5):  # Assuming rating should be between 0 and 5
            raise serializers.ValidationError("Rating must be between 0 and 5")
        return value

    def validate_phone(self, value):
        if not value.strip():
            raise serializers.ValidationError("Phone number cannot be empty")
        return value

    def create(self, validated_data):
        return User.objects.create(**validated_data)